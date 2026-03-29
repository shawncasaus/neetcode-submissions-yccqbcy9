class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map()
        // add all courses to map, even courses without prereqs
        for (let i = 0; i < numCourses; i++) {
            preMap.set(i,[])
        }
        // append any prereqs
        for (const [course, prereq] of prerequisites) {
            preMap.get(course).push(prereq)
        }

        const visitSet = new Set()
        const dfs = (crs) => {
            if (visitSet.has(crs)) return false
            if (preMap.get(crs).length === 0) return true
            visitSet.add(crs)
            for (let pre of preMap.get(crs)) {
                if (!dfs(pre)) return false
            }
            visitSet.delete(crs)
            preMap.set(crs, []);
            return true
        }
        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false
        }
        return true
    }
}
