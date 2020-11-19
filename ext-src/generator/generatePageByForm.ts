import * as vscode from 'vscode';
import * as path from 'path';
import * as fse from 'fs-extra';
let currentPanel: vscode.WebviewPanel | undefined = undefined;
class GeneratePageByForm {
	// private readonly _panel: vscode.WebviewPanel;
	// private readonly _extensionPath: string;
	private _disposables: vscode.Disposable[] = [];
  private _uri: vscode.Uri;
  private _extensionPath:string;



	public constructor(uri:vscode.Uri) {
    this._uri = uri;
    this._extensionPath = uri.path;
    this.init();
  }

  public init() {
    this.createOrShow();
  }

  public async createOrShow() {
		const columnToShowIn = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;

		// // 确保只有一个 webview
		if (currentPanel) {
      currentPanel.reveal(columnToShowIn);
      return;
    }
    
    // this._extensionPath = extensionPath;

		currentPanel = vscode.window.createWebviewPanel("表单配置页面", "表单配置页面6", columnToShowIn?columnToShowIn:vscode.ViewColumn.One, {
      enableScripts: true,
			// And restric the webview to only loading content from our extension's `media` directory.
			// localResourceRoots: [
      //    vscode.Uri.file(path.join(__dirname, '../../webview-react/build'))
      // ]
    });
		// path.join(__dirname, `../../templates/${templateName}`)
		console.log('__dirname :',__dirname)
		const templateName =  path.join(__dirname, `./templates/${"IndexStore.js"}`);
		const templateContent  = await fse.readFileSync(templateName,'utf8').toString();
		console.log('templateContent: ', templateContent);
    // const content = await fse.readFileSync(path.join(__dirname, '../../webview-react/build/index.html'),'utf8').toString();
    // console.log('conent===',content);
		// currentPanel.webview.html = content;
		// currentPanel.onDidDispose(
		// 	() => {
		// 		currentPanel = undefined;
		// 	},
		// 	null,
		// 	[]
		// );
  }
  private _getHtmlForWebview() {
    // const manifest = require(path.join(__dirname, '../../webview-react/build', 'asset-manifest.json'));
		// const mainScript = manifest['main.js'];
		// const mainStyle = manifest['main.css'];

		// const scriptPathOnDisk = vscode.Uri.file(path.join(this._extensionPath, 'build', mainScript));
		// const scriptUri = scriptPathOnDisk.with({ scheme: 'vscode-resource' });
		// const stylePathOnDisk = vscode.Uri.file(path.join(this._extensionPath, 'build', mainStyle));
    // const styleUri = stylePathOnDisk.with({ scheme: 'vscode-resource' });
    
    

		// // Use a nonce to whitelist which scripts can be run
		// const nonce = getNonce();

		// return `<!DOCTYPE html>
		// 	<html lang="en">
		// 	<head>
		// 		<meta charset="utf-8">
		// 		<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
		// 		<meta name="theme-color" content="#000000">
		// 		<title>React App</title>
		// 		<link rel="stylesheet" type="text/css" href="${styleUri}">
		// 		<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src vscode-resource: https:; script-src 'nonce-${nonce}';style-src vscode-resource: 'unsafe-inline' http: https: data:;">
		// 		<base href="${vscode.Uri.file(path.join(this._extensionPath, 'build')).with({ scheme: 'vscode-resource' })}/">
		// 	</head>

		// 	<body>
		// 		<noscript>You need to enable JavaScript to run this app.</noscript>
		// 		<div id="root"></div>
				
		// 		<script nonce="${nonce}" src="${scriptUri}"></script>
		// 	</body>
    // 	</html>`;
    



    let htmlContnt = '';
    try {
      htmlContnt  = fse.readFileSync(path.join(__dirname, '../../webview-react/build/index.html'),'utf8').toString(); 
    } catch (error) {
      throw new Error(error);
      
    }
    console.log('htmlContnt: ', htmlContnt);
    return htmlContnt;
	}
}

function getNonce() {
	let text = "";
	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

export default GeneratePageByForm;
