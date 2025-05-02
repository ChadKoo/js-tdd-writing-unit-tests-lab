import {isPalindrome} from "../utils";

describe("isPalindrome", () => {
    it("returns true if word is a palindrome", () =>{
        const word = "racecar";
        const answer = isPalindrome(word);        
        expect(answer).toBe(true);
    })

    it ("it retuns false if word is not a palindrome", () => {
        const word = "car";
        const answer = isPalindrome(word);
        expect(answer).toBe(false);
    })

    it("it returns true for words that are a combination of upper and lower case letters", () => {
        const word = "RaCecar";
        const answer = isPalindrome(word)
        expect(answer).toBe(true);  
    })

    it("throws an error if any non-alphabetic characters are entered", () =>{
        const word = "race car";
        expect(() => isPalindrome(word)).toThrow();
    });

    it("it throws an error if input is an empty string", ()=>{
        const word = "";
        expect(() => isPalindrome(word)).toThrow();
    })
})