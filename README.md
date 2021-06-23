# Markdown Viewer

![Screenshot](doc/screenshot.png)

A standalone application that renders and displays Markdown files. It does nothing else! No direct editing nor any fancy note taking features. It is not distributed as a browser extension nor does it fire up a web server - so no web browser is needed to see the rendered Markdown file.

## Note on Windows installation and download security

Issues occurred with browser download security features and Windows SmartScreen. I checked both, the Windows Setup-EXE and the ZIP file in [VirusTotal](https://www.virustotal.com) and no engine detected anything at upload time.

I don't know yet, how to prevent these blockings without paying an annual fee.

## Developing

The tool is developed and tested only under Windows (7 and newer) 64 Bit yet.

Node.js including the NPM package manager is needed.

After cloning the Git repository, type `npm install`. NPM may put some warnings while installing the packages.

To start an instance while development, type `npm start`.

Binaries can be built by typing `npm run dist`. Under Windows, a ZIP package and a Setup.exe will be built. Under Linux, an AppImage file will be generated - though it is not tested by the author yet. MacOS is not tested yet and there are properly some settings missing to build the proper packages. Pull requests are welcome!

The icon is made with help of [Inkscape](https://inkscape.org/en/) and [ImageMagick](https://www.imagemagick.org). While the application icon does not look too bad, a proper icon for Markdown *documents* is missing yet.

### Debugging

The main process can be debugged with [Visual Studio Code](https://code.visualstudio.com/). A `launch.json` is in the repository.

The renderer process (`index.html` and `index.js`) must be debugged with help of the Electron development tools by calling in the main menu "Tools" -> "Developer tools" or by pressing the F10 key.

## Copyright and License

This tool is made by Christian Dreier. If you find a copy somewhere, you find the original at [GitHub](https://github.com/c3er/mdview).

You can use and copy this tool under the conditions of the MIT license.

## Todo

- Remember position of last opened window
    - Additional windows shall not open at the same place as the last window
- Recognize the character encoding to display special characters automatically
