"use server";

import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lower case letters without dashes or spaces",
    }),
  description: z.string().min(10),
});

export async function createTopic(formData: FormData) {
  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description')
  })

  if(!result.success) {
    console.log(result.error.flatten().fieldErrors)
  }

  //TODO: revalidate homepage after topic created
}
