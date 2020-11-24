declare const window: any;

class VscodeHelper {
  private static vscode: any;
  constructor() {
    this.init();
  }
  public init() {
    if (window.acquireVsCodeApi) {
      VscodeHelper.vscode = window.acquireVsCodeApi();
    }
  }
  public postMessage({ command, data }: { command: string; data: any }) {
    if (VscodeHelper.vscode) {
      VscodeHelper.vscode.postMessage({
        command,
        data,
      });
    }
  }
}

export default VscodeHelper;
