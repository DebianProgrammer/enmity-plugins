import { sendReply } from "enmity/api/clyde";
import { Command, ApplicationCommandOptionType, ApplicationCommandType, ApplicationCommandInputType } from "enmity/api/commands";
import { Storage } from "enmity/metro/common";


const removealias: Command = {
    id: "removealias-command",
    name: "removeAlias",
    displayName: "removeAlias",
    description: "removes one of your aliases in chat",
    displayDescription: "removes one of your aliases in chat",
    type: ApplicationCommandType.Chat,
    inputType: ApplicationCommandInputType.BuiltInText,
    options: [{
        name: "aliasid",
        displayName: "aliasid",
        description: "The ID of the alias to remove",
        displayDescription: "The ID of the alias to remove",
        type: ApplicationCommandOptionType.String,
        required: true
    }],
    execute: async function (args, message) {
        const inputalias = args[args.findIndex(i => i.name === "aliasid")].value;
        
        let aliasesStorage = await Storage.getItem("ChatAliases");
        if(!aliasesStorage) {
            sendReply(message?.channel.id ?? "0", "You don't have any aliases");
            return;
        }

        let aliases = JSON.parse(aliasesStorage);
        if(!aliases[inputalias]) {
            sendReply(message?.channel.id ?? "0", "That alias does not exist");
            return;
        }
        
        delete aliases[inputalias];
        await Storage.setItem("ChatAliases", JSON.stringify(aliases));
        
        sendReply(message?.channel.id ?? "0", `The alias ${inputalias} has been deleted`);
    }
}


export { removealias }
