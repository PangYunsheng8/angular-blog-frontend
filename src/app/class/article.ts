export class Article {
    constructor(
        public id:number=1,
        public title:string="title",
        public tags:string="tags",
        public createdAt:Date=new Date(),
        public clickTimes:number = 5,
        public content:string = "content",
    ){}
}
