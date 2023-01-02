import { Injectable } from "@nestjs/common";

@Injectable()
export default class QuotesService {

    quotes: Array<string> = []

    addQuote(quote : string) {
        this.quotes.push(quote)
    }

    getQuotes() {
        return this.quotes 
    }
}