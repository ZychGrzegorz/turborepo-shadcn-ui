import { z } from "zod";
import { SwaggerTags } from "../swagger/swagger-tags";
import { publicProcedure, router } from "../trpc";
import { getGeneralService } from "../services/general";
import { getServices } from "../services";


export const GeneralRouter = router({
    main: publicProcedure
        // .meta({
        //     openapi: {
        //         method: "GET",
        //         path: `general/get`,
        //         tags: [SwaggerTags.general],
        //     },
        // })
        // .input(z.void())
        .input(z.any())
        // .output(z.any())
        // .output(z.object({ name: z.string() }))
        .query(async ({input}) => {
            // const allResults = (await getGeneralService()).list({});
            const { generalService } = await getServices();
            const allResults = await generalService.list(input.query);
            return { allResults }
        })
})