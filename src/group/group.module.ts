import {Module} from "@nestjs/common";
import {GroupResolver} from "./group.resolver";

@Module({
    providers: [GroupResolver],
})
export class GroupModule {
}
