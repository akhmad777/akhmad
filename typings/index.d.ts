import { Message, Guild, TextChannel, DMChannel, NewsChannel, Collection, ClientEvents, VoiceState } from "discord.js";
import { Disc_11 } from "../src/structures/Disc_11";
import { ServerQueue } from "../src/structures/ServerQueue";

export interface ICommandComponent {
    meta: {
        aliases?: string[];
        cooldown?: number;
        disable?: boolean;
        path?: string;
        name: string;
        description?: string;
        usage?: string;
    };
    execute(message: IMessage, args: string[]): any;
}
export interface IGuild extends Guild {
    client: Disc_11;
    queue: ServerQueue | null;
}
export interface IMessage extends Message {
    client: Disc_11;
    guild: IGuild | null;
    channel: ITextChannel | INewsChannel | IDMChannel;
}
export interface ITextChannel extends TextChannel {
    client: Disc_11;
    guild: IGuild;
    send(
        content: APIMessageContentResolvable | (MessageOptions & { split?: false }) | MessageAdditions,
    ): Promise<IMessage>;
    send(options: MessageOptions & { split: true | SplitOptions }): Promise<IMessage[]>;
    send(options: MessageOptions | APIMessage): Promise<IMessage | IMessage[]>;
    send(content: StringResolvable, options: (MessageOptions & { split?: false }) | MessageAdditions): Promise<IMessage>;
    send(content: StringResolvable, options: MessageOptions & { split: true | SplitOptions }): Promise<IMessage[]>;
    send(content: StringResolvable, options: MessageOptions): Promise<IMessage | IMessage[]>;
}
export interface INewsChannel extends NewsChannel {
    client: Disc_11;
    guild: IGuild;
    send(
        content: APIMessageContentResolvable | (MessageOptions & { split?: false }) | MessageAdditions,
    ): Promise<IMessage>;
    send(options: MessageOptions & { split: true | SplitOptions }): Promise<IMessage[]>;
    send(options: MessageOptions | APIMessage): Promise<IMessage | IMessage[]>;
    send(content: StringResolvable, options: (MessageOptions & { split?: false }) | MessageAdditions): Promise<IMessage>;
    send(content: StringResolvable, options: MessageOptions & { split: true | SplitOptions }): Promise<IMessage[]>;
    send(content: StringResolvable, options: MessageOptions): Promise<IMessage | IMessage[]>;
}
export interface IDMChannel extends DMChannel {
    client: Disc_11;
    guild: null;
    send(
        content: APIMessageContentResolvable | (MessageOptions & { split?: false }) | MessageAdditions,
    ): Promise<IMessage>;
    send(options: MessageOptions & { split: true | SplitOptions }): Promise<IMessage[]>;
    send(options: MessageOptions | APIMessage): Promise<IMessage | IMessage[]>;
    send(content: StringResolvable, options: (MessageOptions & { split?: false }) | MessageAdditions): Promise<IMessage>;
    send(content: StringResolvable, options: MessageOptions & { split: true | SplitOptions }): Promise<IMessage[]>;
    send(content: StringResolvable, options: MessageOptions): Promise<IMessage | IMessage[]>;
}
export interface ISongs extends Collection<string, ISong> {
    addSong(song: ISong): this;
    deleteFirst(): boolean;
}
export interface ISong {
    id: string;
    title: string;
    url: string;
    thumbnail: string;
}
export interface IListener {
    name: keyof ClientEvents;
    execute(...args: any): any;
}
export interface IVoiceState extends VoiceState {
    guild: IGuild;
}
