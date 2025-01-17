    function isPalindrome(s) {
        let normal = s.toLowerCase().replace(/[^a-z0-9]/g, ''); 
        let reversed = normal.split('').reverse().join('');     
        return normal === reversed;                             
    }


   console.log(isPalindrome("A man, a plan, a canal: Panama"))