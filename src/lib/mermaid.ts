type MermaidApi = {
  initialize: (opts: Record<string, unknown>) => void;
  run: (opts: { nodes: Element[] }) => Promise<void>;
};

declare global {
  interface Window {
    mermaid?: MermaidApi;
  }
}

/**
 * Client-side Mermaid for Markdown ```mermaid fences.
 * Loads mermaid@11 from jsDelivr once per page.
 */
export function initMermaid() {
  const nodes = Array.from(
    document.querySelectorAll('pre > code.language-mermaid, pre.language-mermaid'),
  );
  if (!nodes.length) return;

  const run = async () => {
    const mermaid = await loadMermaid();
    const dark = document.documentElement.dataset.theme === 'dark';
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: dark ? 'dark' : 'default',
      flowchart: { htmlLabels: true, curve: 'basis' },
    });

    const hosts = nodes.flatMap((code, i) => {
      const pre =
        code.tagName === 'PRE'
          ? code
          : code.closest('pre');
      if (!pre) return [];
      const text = (code.textContent || '').trim();
      const host = document.createElement('div');
      host.className = 'mermaid hci-mermaid';
      host.dataset.mermaidIndex = String(i);
      host.textContent = text;
      pre.replaceWith(host);
      return [host];
    });

    if (hosts.length) await mermaid.run({ nodes: hosts });
  };

  run().catch((err) => console.warn('[hci-mermaid]', err));
}

function loadMermaid(): Promise<MermaidApi> {
  return new Promise((resolve, reject) => {
    if (window.mermaid) {
      resolve(window.mermaid);
      return;
    }
    const existing = document.querySelector('script[data-hci-mermaid]');
    if (existing) {
      existing.addEventListener('load', () => {
        if (window.mermaid) resolve(window.mermaid);
        else reject(new Error('mermaid failed to load'));
      });
      existing.addEventListener('error', reject);
      return;
    }
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js';
    s.async = true;
    s.dataset.hciMermaid = '1';
    s.onload = () => {
      if (window.mermaid) resolve(window.mermaid);
      else reject(new Error('mermaid failed to load'));
    };
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

export {};
