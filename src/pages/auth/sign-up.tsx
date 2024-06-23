import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { ArrowLeft } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signUpSchema = z.object({
  restaurantName: z.string().min(1, 'Campo necessário'),
  managerName: z.string().min(1, 'Campo necessário'),
  email: z
    .string()
    .min(1, 'Campo necessário')
    .email('Formato de email incorreto'),
  phone: z.string().min(1, 'Campo necessário'),
})

type SignUpType = z.infer<typeof signUpSchema>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  })

  async function handleSignUp(data: SignUpType) {
    console.log(data)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch {
      toast.error('Erro ao cadastras restaurante')
    }
  }

  return (
    <>
      <Helmet title="Login" />

      <Button
        asChild
        variant={'ghost'}
        className="absolute left-8 top-8 flex items-center gap-2"
      >
        <Link to={'/sign-in'}>
          <ArrowLeft className="h-5 w-5" /> Voltar
        </Link>
      </Button>

      <div>
        <div className="flex w-[350px] flex-col gap-6">
          <header className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e começe suas vendas!
            </p>
          </header>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label className="font-semibold" htmlFor="email">
                Nome do estabelecimento
              </Label>
              <Input
                {...register('restaurantName')}
                autoComplete="restaurantName"
                id="restaurantName"
                type="text"
              />
              {errors.restaurantName && (
                <span className="text-sm text-muted-foreground">
                  {errors.restaurantName.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label className="font-semibold" htmlFor="email">
                Seu nome
              </Label>
              <Input
                {...register('managerName')}
                autoComplete="managerName"
                id="managerName"
                type="text"
              />
              {errors.managerName && (
                <span className="text-sm text-muted-foreground">
                  {errors.managerName.message}
                </span>
              )}
            </div>
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
                <span className="text-sm text-muted-foreground">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label className="font-semibold" htmlFor="email">
                Seu celular
              </Label>
              <Input
                {...register('phone')}
                autoComplete="phone"
                id="phone"
                type="tel"
              />
              {errors.phone && (
                <span className="text-sm text-muted-foreground">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com os nossos{' '}
              <a className="underline" href="">
                termos de serviço
              </a>{' '}
              e{' '}
              <a className="underline" href="">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
