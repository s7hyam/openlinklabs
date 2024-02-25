
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "./userauthform"
import { ThemeToggle } from "@/lib/theme-toggle"



export default function AuthenticationPage() {
    return (
        <>

            <div className="sm:container relative h-screen max-h-[800px] items-center  md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <Link
                    to="/"
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "absolute right-4 top-4 md:right-8 md:top-8"
                    )}
                >
                    Login
                </Link>
                <div className="hidden relative h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-gradient-to-b to-slate-950 from-blue-950" />
                    <div className="relative z-20 flex items-center justify-between text-lg font-medium">
                        <div className="flex items-center">
                            <img src="/images/logo.svg" className="invert h-8 " />
                            <span>
                                Openlink Labs
                            </span>
                        </div>


                        <ThemeToggle />
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            {/* <p className="text-lg">
                                &ldquo;This library has saved me countless hours of work and
                                helped me deliver stunning designs to my clients faster than
                                ever before.&rdquo;
                            </p> */}
                            <p className="text-lg mt-4">
                                &ldquo;The application is under development mode. We'll soon start aceepting applications for beta. If you match our guidelines for beta we'll surely get back to you, till then learn you fav tool so you can utilize the plateform in best possible way.
                                &rdquo;
                            </p>

                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8 px-4 h-full flex flex-col items-center justify-center">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <UserAuthForm />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                to="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                to="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}