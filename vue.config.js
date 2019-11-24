module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeModulesPath: ['../../node_modules', './node_modules'],
            builderOptions: {
                appId: "saektide.esix-hub.app",
                productName: "e6Hub",
                win: {
                    target: ["nsis"],
                    icon: "./e6h.ico"
                },
                nsis: {
                    installerLanguages: "en_US",
                    installerIcon: "./e6h_ins.ico",
                    uninstallerIcon: "./e6h_unins.ico"
                },
                publish: {
                    provider: "github",
                    owner: "Saektide",
                    repo: "e6-hub-vue"
                }
            }
        }
    }
}