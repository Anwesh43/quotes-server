import { Body, Controller, Get, HttpException, HttpStatus, Inject, Post } from "@nestjs/common";
import QuotesService from "./quotes.service";

interface QuotesResponse{
    quotes : Array<string>
}

interface SaveResponse {
    status : string 
}

interface SaveRequest {
    quote : string
}

const sleep  : (number) => Promise<any> = (delay : number) : Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay)
    })
}
@Controller("/quotes")
export default class QuotesController {

    @Inject()
    quotesService : QuotesService

    @Get("/all")
    async getQuotes() : Promise<QuotesResponse> {
        const randomNumber : number = Math.random() * 100 
        if (randomNumber > 49) {
            await sleep(2000)
        }
        if (randomNumber > 75) {
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return {
            quotes: this.quotesService.getQuotes()
        }
    }

    @Post("/addQuote")
    addQuote(@Body()req : SaveRequest) {
        this.quotesService.addQuote(req.quote)
        return {
            status : "success"
        } 
    }
}