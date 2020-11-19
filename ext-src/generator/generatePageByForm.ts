import * as vscode from 'vscode';
import * as path from 'path';
class GeneratePageByForm {
	// private readonly _panel: vscode.WebviewPanel;
	// private readonly _extensionPath: string;
	private _disposables: vscode.Disposable[] = [];
  private _uri: vscode.Uri;
  private _panel: vscode.WebviewPanel | undefined;
  private _extensionPath:string;



	public constructor(uri:vscode.Uri) {
    this._uri = uri;
    this._extensionPath = uri.path;
    this.init();
  }

  public init() {
    this.createOrShow();
  }

  public  createOrShow() {
		const column = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;

		// // 确保只有一个 webview
		// if (this._panel) {
    //   this._panel.reveal(column);
    //   return;
    // }
    
    // this._extensionPath = extensionPath;

		// // Create and show a new webview panel
		this._panel = vscode.window.createWebviewPanel("表单配置页面", "表单配置页面", column?column:vscode.ViewColumn.One, {
      enableScripts: true,
			// And restric the webview to only loading content from our extension's `media` directory.
			// localResourceRoots: [
			// 	vscode.Uri.file(path.join(this._extensionPath, 'build'))
      // ]
      
		});
	}
}

export default GeneratePageByForm;
