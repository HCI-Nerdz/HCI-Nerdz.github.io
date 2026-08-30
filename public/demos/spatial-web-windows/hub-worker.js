/**
 * SharedWorker state hub for spatial-web-windows demo.
 * Broadcasts exposure/selection deltas to all connected windows.
 */
const ports = new Set();

const state = {
  exposure: 0,
  contrast: 100,
  selection: { x: 0.25, y: 0.25, w: 0.35, h: 0.35 },
  mode: 'spatial',
  displayIntent: 'desktop',
};

function broadcast(msg) {
  for (const port of ports) {
    port.postMessage(msg);
  }
}

self.onconnect = (event) => {
  const port = event.ports[0];
  ports.add(port);
  port.start();
  port.postMessage({ type: 'state', payload: { ...state } });

  port.onmessage = (e) => {
    const { type, payload } = e.data || {};
    if (type === 'patch') {
      Object.assign(state, payload);
      broadcast({ type: 'state', payload: { ...state } });
    } else if (type === 'get') {
      port.postMessage({ type: 'state', payload: { ...state } });
    }
  };

  port.onmessageerror = () => ports.delete(port);
};
