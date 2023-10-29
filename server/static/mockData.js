"use strict";
/* Create Mock Data for Development */
function random0toN(n = 10) {
  return Math.floor(Math.random() * m);
}

function getRandomFramework() {
  const frameworks = [
    "react", "solid", "svelte", "marko", "htmx", "astro", "vue", "angular", "alpine", "preact", "quik", "lit"
  ];
  return frameworks[random0toN(frameworks.length)];
}


function generateMockHistory(n) {
  const output = [];
  while (n > 0) {
    output.push(getRandomFramework());
  }
  return output.join(",");
};

function generateMockVotes(numVoters, votesPer) {
  const mockVotes = [];
  for (let i = 0; i < numVoters; i++) {
    for (let j = 0; j < votesPer; j++) {
      mockVotes.push({
        id: String(i).padStart(4, "0"),
        user_id: `user-${String(i).padStart(7, "0")}`,
        framework: getRandomFramework(),
        created_at: new Date().getTime(),
        voteHistory: generateMockHistory(random0toN())
      });
    }
  }
  return;
}

export const mockVoteData = generateMockVotes(500, 7);