import { sendReply } from "enmity/api/clyde";
import { Command, ApplicationCommandOptionType, ApplicationCommandType, ApplicationCommandInputType } from "enmity/api/commands";
import { Storage } from "enmity/metro/common";


const setalias: Command = {
    id: "setalias-command",
    name: "setalias",
    displayName: "setAlias",
    description: "sets one of your aliases in chat",
    displayDescription: "sets one of your aliases in chat",
    type: ApplicationCommandType.Chat,
    inputType: ApplicationCommandInputType.BuiltInText,
    options: [{
        name: "aliasid",
        displayName: "aliasid",
        description: "The ID of the alias to use",
        displayDescription: "The ID of the alias to use",
        type: ApplicationCommandOptionType.String,
        required: true
    },
    {
        name: "content",
        displayName: "content",
        description: "The content of the alias",
        displayDescription: "The content of the alias",
        type: ApplicationCommandOptionType.String,
        required: true
    }],
    execute: async function (args, message) {
        const inputalias = args[args.findIndex(i => i.name === "aliasid")].value;
        const contentalias = args[args.findIndex(i => i.name === "content")].value;
        
        let aliasesStorage = await Storage.getItem("ChatAliases");
        if(!aliasesStorage) {
            await Storage.setItem("ChatAliases", "{}");
            aliasesStorage = await Storage.getItem("ChatAliases");
        }

        let aliases = JSON.parse(aliasesStorage);
        
        aliases[inputalias] = contentalias;
        await Storage.setItem("ChatAliases", JSON.stringify(aliases));
        
        sendReply(message?.channel.id ?? "0", `The alias ${inputalias} has been set to ${contentalias}`);
    }
}


export { setalias }
