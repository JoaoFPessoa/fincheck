import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof schema>

const schema = z.object({
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("D igite um email válido"),
  password: z.string().min(8, "Senha deve conter pelo menos 8 dígitos"),
});

export default function useLoginController() {
  const { handleSubmit: hookFormHandleSubmit, register, formState: {errors} } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    schema.parse(data);
  });
  return { handleSubmit, register, errors };
}
