import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../Button";

export default function Login() {
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
      <form action="" className="mt-16 flex flex-col gap-4 w-full">
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="password" name="email" placeholder="Senha" />
        <Button className="mt-4">Entrar</Button>
      </form>
    </div>
  );
}
