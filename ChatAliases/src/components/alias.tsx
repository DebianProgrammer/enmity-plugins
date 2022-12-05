import { sendReply } from "enmity/api/clyde";
import { Command, ApplicationCommandOptionType, ApplicationCommandType, ApplicationCommandInputType } from "enmity/api/commands";
import { Storage } from "enmity/metro/common";


const alias: Command = {
    id: "alias-command",
    name: "alias",
    displayName: "alias",
    description: "sends one of your aliases in chat",
    displayDescription: "sends one of your aliases in chat",
    type: ApplicationCommandType.Chat,
    inputType: ApplicationCommandInputType.BuiltInText,
    options: [{
        name: "aliasid",
        displayName: "aliasid",
        description: "The ID of the alias to use",
        displayDescription: "The ID of the alias to use",
        type: ApplicationCommandOptionType.String,
        required: true
    }],
    execute: async function (args, message) {
        const inputalias = args[args.findIndex(i => i.name === "aliasid")].value;
        
        let aliasesStorage = await Storage.getItem("ChatAliases");
        if(!aliasesStorage) {
            await Storage.setItem("ChatAliases", "{}");
            aliasesStorage = await Storage.getItem("ChatAliases");
        }


        let aliases = JSON.parse(aliasesStorage);
        
        if(aliases[inputalias] == undefined) {
            sendReply(message?.channel.id ?? "0", `That's not a valid alias id. Use the /setalias command to add one and /removealias to remove one. Valid aliases are: ${Object.keys(aliases)}`);
            return;
        }
        
        return {
            content: aliases[inputalias]
        }
    }
}


export { alias }
