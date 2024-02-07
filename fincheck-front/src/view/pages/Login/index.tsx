import { Link } from "react-router-dom";
import Button from "../../components/Button";
import useLoginController from "./useLoginController";
import Input from "../../components/Input";

export default function Login() {
  const { handleSubmit, register, errors } = useLoginController();
  return (
    <div className="mt-12 flex flex-col items-center w-[440px]">
      <header className="gap-4 flex flex-col">
        <h1 className="text-2xl font-bold tracking-[-1px]">
          Entre em sua conta
        </h1>
        <p>
          <span className="text-gray-700 tracking-[-0.5px]">
            Novo por aqui?{" "}
          </span>
          <Link
            to="/register"
            className="space-x-2 text-green-700 tracking-[-0.5px] font-medium"
          >
            Crie sua conta
          </Link>
        </p>
      </header>
      <form
        onSubmit={handleSubmit}
        className="mt-16 flex flex-col gap-4 w-full"
      >
        <Input error={errors.email?.message} type="email" {...register("email")} placeholder="E-mail" />
        <Input error={errors.password?.message}  type="password" {...register("password")} placeholder="Senha" />
        <Button className="mt-4">Entrar</Button>
      </form>
    </div>
  );
}
