export async function checkWebNNSupport(): Promise<boolean> {
  try {
    if (!('ml' in navigator)) {
      return false;
    }

    const context = await navigator.ml.createContext();
    if (!window.MLGraphBuilder) {
      return false;
    }

    new MLGraphBuilder(context);
    return true;
  } catch {
    return false;
  }
}