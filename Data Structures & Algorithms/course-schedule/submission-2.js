class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjacencyList = new Map()
        const traversed = new Set()

        // build adjacency list
        for (let i = 0; i < numCourses; i++) {
            adjacencyList.set(i,[])
        }

        for (let [courseA, courseB] of prerequisites) {
            adjacencyList.get(courseA).push(courseB)
        }

        console.log(adjacencyList)

        function dfs(course) {
            // if traversed meaning a a cycle is found
            if (traversed.has(course)) return false;

            // if course has no more prereqs 
            const preReqs = adjacencyList.get(course)
            if (preReqs.length === 0) return true;

            traversed.add(course)

            for (let i = 0; i < preReqs.length; i++) {
                // check if course is valid
                if (!dfs(preReqs[i])) {
                    return false
                }
            }

            traversed.delete(course)
            adjacencyList.set(course, [])
            return true
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false
        }
        return true
    }
}
