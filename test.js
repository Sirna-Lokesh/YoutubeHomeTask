describe("test",function()
{
    it("check whether the fetch function is returning json object  or not",function()
    {
        let r=fetchSearchResults();
        let result=typeof r;
        expect(result).toBe(typeof {} );
    })
})

describe("test",function()
{
    it("Should return Searched text or default text if there is nothing in search box",function()
    {
        let result=getSearchValue();
        expect(result).toBe("java");
    })
})
describe("test",function()
{
    it("should return Numbered Buttons as Array",function()
    {
        let r=numberedButtons();
        let result=typeof r;
        expect(result).toBe(typeof {});
    })
})
describe("test",function()
{
    it("Check whether link is genarated or not",function()
    {
        let r=genarateLink();
        let result=typeof r;
        expect(result).toBe(typeof "");
    })
})
describe("testing events",function()
{
    
})
