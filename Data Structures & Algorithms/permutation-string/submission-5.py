class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1)>len(s2):
            return False
        s1f={}
        windowfrequency={}
        for char in s1:
            s1f[char]= s1f.get(char,0)+1
        for i in range(len(s1)):
            char=s2[i]
            windowfrequency[char]=windowfrequency.get(char,0)+1
        if s1f==windowfrequency:
            return True
        for i in range(len(s1),len(s2)):
            windowfrequency[s2[i]]=windowfrequency.get(s2[i],0)+1
            windowfrequency[s2[i-len(s1)]]-=1
            if windowfrequency[s2[i-len(s1)]]==0:
                del windowfrequency[s2[i-len(s1)]]
            if s1f== windowfrequency:
                return True
        return False