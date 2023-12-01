'use client'

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useEffect, useState } from "react"

interface BreakfastProps {
    name: string,
    picture: string,
    ingredients: string,
}

const BreakfastCard = ({ name, picture, ingredients }: BreakfastProps) => {
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        if (picture === '') {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [])
    return (
        <Card className="w-[350px]">
            <img
                src={picture}
                alt='breakfast'
                sizes="100%"
                width={200}
                height={200}
                className="w-full h-[225px] rounded-md object-cover mb-2"
            />
            <CardContent className='h-[100px] flex flex-col justify-between'>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                    <Dialog>
                        <DialogTrigger>
                            Інгредієнти
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-center">{name}</DialogTitle>
                                <DialogDescription>
                                    <img
                                        src={picture}
                                        alt='breakfast'
                                        sizes="100%"
                                        className="w-full rounded-md object-cover mb-2"
                                    />
                                    {ingredients}
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </CardDescription>
            </CardContent>
        </Card>
    )
}

export default BreakfastCard
