import { theme } from '@/constants/theme'
import React from 'react'
import Home from './Home'
import Image from './Image'
import ArrowLeft from './ArrowLeft'
import Call from './Call'
import Camera from './Camera'
import Comment from './Comment'
import Delete from './Delete'
import Edit from './Edit'
import Heart from './Heart'
import Mail from './Mail'
import Location from './Location'
import Lock from './Lock'
import Logout from './logout'
import Plus from './Plus'
import Send from './Send'
import ThreeDotsCircle from './ThreeDotsCircle'
import ThreeDotsHorizontal from './ThreeDotsHorizontal'
import User from './User'
import Video from './Video'
import Graph from './Graph'

interface IndexProps {
    name:string,
    height?:number,
    width?:number,
    color?:string,
    strokeWidth?:number,
    size?:number
}


const IconArray: { [key: string]: React.ComponentType<any> } = {
    home: Home,
    image:Image,
    arrowLeft:ArrowLeft,
    call:Call,
    camera:Camera,
    comment:Comment,
    delete:Delete,
    edit:Edit,
    heart:Heart,
    mail:Mail,
    location:Location,
    lock:Lock,
    logout:Logout,
    plus:Plus,
    send:Send,
    threedotscircle:ThreeDotsCircle,
    threedotshorizontal:ThreeDotsHorizontal,
    user:User,
    video:Video,
    graph:Graph
}

const Index = ({name,height=24,width=24,color=theme.colors.textLight,strokeWidth=1.9,size}:IndexProps) => {
    const Icon = IconArray[name]
    return (
    <Icon height={height} width={width} color={color} strokeWidth={strokeWidth} size={size}/>
  )
}

export default Index