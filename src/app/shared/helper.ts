import { Router } from "@angular/router"

export const getLessonKey = (router: Router) =>{
    return router.url.split("/").pop()
}