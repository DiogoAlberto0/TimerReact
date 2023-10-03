import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header/index"
import { DefaultLayoutContainer } from "./style"


export function DefaultLayouts() {


    return(
        <DefaultLayoutContainer>
            <Header />
            <Outlet />
        </DefaultLayoutContainer>
    )
}