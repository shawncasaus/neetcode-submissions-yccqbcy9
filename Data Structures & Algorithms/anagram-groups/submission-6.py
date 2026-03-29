class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams_map = {}
        for word in strs:
            counts = [0] * 26
            for ch in word:
                index = ord(ch) - ord('a')
                counts[index] += 1
            key = tuple(counts)  # tuples are hashable, unlike lists
            if key not in anagrams_map:
                anagrams_map[key] = [word]
            else:
                anagrams_map[key].append(word)
        return list(anagrams_map.values())