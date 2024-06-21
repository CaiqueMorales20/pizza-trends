import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signInSchema = z.object({
  email: z
    .string()
    .min(1, 'Campo necessário')
    .email('Formato de email incorreto'),
})

type SignInType = z.infer<typeof signInSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
  })

  async function handleSignIn(data: SignInType) {
    console.log(data)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Enviamos um link de autentiação para seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      })
    } catch {
      toast.error('Creedencias inválidas')
    }
  }

  return (
    <>
      <Helmet title="Login" />

      <Button asChild variant={'outline'} className="absolute right-8 top-8">
        <Link to={'/sign-up'}>Cadastrar restaurante</Link>
      </Button>

      <div>
        <div className="flex w-[350px] flex-col gap-6">
          <header className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-muted-foreground text-sm">
              Acompanhe suas vendas pelo painel parceiro!
            </p>
          </header>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label className="font-semibold" htmlFor="email">
                Seu e-mail
              </Label>
              <Input
                {...register('email')}
                autoComplete="email"
                id="email"
                type="email"
              />
              {errors.email && (
                <span className="text-muted-foreground text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
