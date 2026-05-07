export interface DSATopic {
  title: string;
  freq: "fh" | "fm" | "fl";
  patterns: string[];
  problems: string;
  ask: string;
}

export interface DSAPhase {
  title: string;
  subtitle: string;
  weeks: string;
  goal: string;
  strategy: string;
  color: string;
  topics: DSATopic[];
}

export const dsaPhases: DSAPhase[] = [
  {
    title: "Phase 1 — Foundations",
    subtitle: "Weeks 1–3",
    weeks: "~15 problems / week",
    goal: "Goal: fluency on core structures",
    strategy: "Do not skip to hard problems. At this phase every topic should reach the point where you can code the solution in under 10 minutes without hints. Speed here compounds later.",
    color: "#1D9E75",
    topics: [
      {
        title: "Arrays & strings",
        freq: "fh",
        patterns: ["two pointers", "prefix sum", "kadane's algorithm", "sliding window preview"],
        problems: "Two Sum · Maximum Subarray · Product of Array Except Self · Valid Palindrome · Longest Common Prefix",
        ask: "Teach me the most important array and string patterns for FAANG with examples"
      },
      {
        title: "Linked lists",
        freq: "fh",
        patterns: ["slow/fast pointers", "reverse in place", "dummy head", "two-pointer merge"],
        problems: "Reverse Linked List · Merge Two Sorted Lists · Linked List Cycle · Remove Nth From End · LRU Cache",
        ask: "Explain how to solve linked list problems with the slow/fast pointer technique"
      },
      {
        title: "Hash maps & sets",
        freq: "fh",
        patterns: ["frequency map", "complement lookup", "grouping", "seen set"],
        problems: "Two Sum · Group Anagrams · Top K Frequent Elements · Longest Consecutive Sequence · Valid Anagram",
        ask: "What are the most important hash map patterns for FAANG interviews?"
      },
      {
        title: "Stacks & queues",
        freq: "fh",
        patterns: ["monotonic stack", "bracket matching", "BFS queue", "deque window"],
        problems: "Valid Parentheses · Min Stack · Daily Temperatures · Largest Rectangle in Histogram · Sliding Window Maximum",
        ask: "Explain the monotonic stack pattern and when to use it in FAANG problems"
      },
      {
        title: "Binary search",
        freq: "fh",
        patterns: ["classic sorted array", "search on answer space", "rotated array", "boundary condition"],
        problems: "Binary Search · Search in Rotated Array · Find Minimum in Rotated Array · Koko Eating Bananas · Median of Two Sorted Arrays",
        ask: "Teach me the binary search on answer space pattern with examples"
      },
      {
        title: "Sorting fundamentals",
        freq: "fm",
        patterns: ["merge sort", "quick sort", "counting sort", "custom comparator"],
        problems: "Sort Colors · Merge Intervals · Meeting Rooms · Kth Largest Element · Wiggle Sort",
        ask: "What sorting algorithms and patterns are tested at FAANG and when to use each?"
      },
      {
        title: "Math & bit manipulation",
        freq: "fl",
        patterns: ["XOR tricks", "power of two", "bit masking", "mod arithmetic"],
        problems: "Single Number · Number of 1 Bits · Reverse Bits · Power of Two · Missing Number",
        ask: "What bit manipulation tricks appear most in FAANG coding interviews?"
      }
    ]
  },
  {
    title: "Phase 2 — Core patterns",
    subtitle: "Weeks 4–7",
    weeks: "~20 problems / week",
    goal: "Goal: recognise and apply patterns",
    strategy: "For each pattern, solve 3 easy → 3 medium → 1 hard. The goal is pattern recognition speed — you should identify the right technique within 2 minutes of reading the problem.",
    color: "#185FA5",
    topics: [
      {
        title: "Sliding window",
        freq: "fh",
        patterns: ["fixed-size window", "variable window expand/contract", "two-pointer variant", "character frequency map"],
        problems: "Longest Substring Without Repeating · Minimum Window Substring · Longest Repeating Character Replacement · Fruit Into Baskets · Permutation in String",
        ask: "Deep dive into the sliding window pattern — fixed vs variable size with FAANG examples"
      },
      {
        title: "Two pointers",
        freq: "fh",
        patterns: ["opposite ends", "same direction", "partitioning", "3-sum variant"],
        problems: "3Sum · Container With Most Water · Trapping Rain Water · Remove Duplicates · Sort Colors",
        ask: "Teach me the two-pointer pattern variants for FAANG with examples for each"
      },
      {
        title: "Trees — DFS",
        freq: "fh",
        patterns: ["preorder/inorder/postorder", "path sum", "lowest common ancestor", "serialize/deserialize"],
        problems: "Max Depth of Binary Tree · Validate BST · LCA of Binary Tree · Path Sum II · Diameter of Binary Tree",
        ask: "What tree DFS patterns are tested at FAANG and how do I recognise when to use each?"
      },
      {
        title: "Trees — BFS / level order",
        freq: "fh",
        patterns: ["level-by-level traversal", "zigzag", "right side view", "multi-source BFS"],
        problems: "Binary Tree Level Order · Right Side View · Rotting Oranges · Word Ladder · Walls and Gates",
        ask: "Teach me BFS on trees and grids — patterns and FAANG problem examples"
      },
      {
        title: "Graphs — DFS & BFS",
        freq: "fh",
        patterns: ["connected components", "cycle detection", "topological sort", "bipartite check"],
        problems: "Number of Islands · Clone Graph · Course Schedule · Pacific Atlantic Water Flow · Number of Connected Components",
        ask: "What graph DFS and BFS patterns are most tested at FAANG?"
      },
      {
        title: "Heaps / priority queues",
        freq: "fh",
        patterns: ["top K", "two heaps (median)", "merge K sorted", "event simulation"],
        problems: "Kth Largest · Top K Frequent Words · Find Median from Data Stream · Merge K Sorted Lists · Task Scheduler",
        ask: "Explain the heap patterns tested at FAANG — top-K, two heaps, and merge-K"
      },
      {
        title: "Prefix sums & difference arrays",
        freq: "fm",
        patterns: ["range sum query", "subarray sum equals k", "2D prefix sum", "difference array update"],
        problems: "Range Sum Query · Subarray Sum Equals K · Contiguous Array · Product Except Self · 2D Matrix Range Sum",
        ask: "Teach me prefix sum and difference array patterns for FAANG interviews"
      }
    ]
  },
  {
    title: "Phase 3 — Advanced",
    subtitle: "Weeks 8–11",
    weeks: "~15 problems / week, harder",
    goal: "Goal: handle multi-pattern problems",
    strategy: "Most hard FAANG problems combine 2–3 patterns. Practice narrating your thought process aloud — interviewers are evaluating reasoning, not just the answer.",
    color: "#7F77DD",
    topics: [
      {
        title: "Dynamic programming — 1D",
        freq: "fh",
        patterns: ["fibonacci-style", "decision at each step", "state = index", "memoisation vs tabulation"],
        problems: "Climbing Stairs · House Robber · Coin Change · Jump Game · Word Break",
        ask: "Teach me 1D dynamic programming — the mental model, state definition, and FAANG examples"
      },
      {
        title: "Dynamic programming — 2D",
        freq: "fh",
        patterns: ["grid paths", "edit distance", "LCS", "knapsack variants"],
        problems: "Unique Paths · Longest Common Subsequence · Edit Distance · Maximal Square · Interleaving String",
        ask: "Deep dive into 2D DP — how to define the state table and fill it for FAANG problems"
      },
      {
        title: "Backtracking",
        freq: "fh",
        patterns: ["permutations", "subsets", "combination sum", "constraint pruning"],
        problems: "Subsets · Permutations · Combination Sum · N-Queens · Word Search",
        ask: "Teach me the backtracking template and how to apply it to FAANG problems"
      },
      {
        title: "Tries",
        freq: "fm",
        patterns: ["prefix search", "word dictionary", "wildcard matching", "XOR trie"],
        problems: "Implement Trie · Word Search II · Design Add and Search Words · Replace Words · Maximum XOR of Two Numbers",
        ask: "Explain trie data structure — implementation and FAANG problem patterns"
      },
      {
        title: "Union-find (DSU)",
        freq: "fm",
        patterns: ["connected components", "cycle detection in undirected", "number of provinces", "redundant connection"],
        problems: "Number of Provinces · Redundant Connection · Accounts Merge · Satisfiability of Equality Equations · Making a Large Island",
        ask: "Explain Union-Find with path compression and union by rank — FAANG applications"
      },
      {
        title: "Intervals",
        freq: "fh",
        patterns: ["sort by start", "merge overlapping", "insert interval", "sweep line"],
        problems: "Merge Intervals · Insert Interval · Non-Overlapping Intervals · Meeting Rooms II · Employee Free Time",
        ask: "Teach me interval problem patterns for FAANG — sorting, merging, and sweep line"
      },
      {
        title: "Greedy algorithms",
        freq: "fm",
        patterns: ["local optimal = global", "activity selection", "scheduling", "exchange argument proof"],
        problems: "Jump Game II · Gas Station · Candy · Partition Labels · Task Scheduler",
        ask: "Explain greedy algorithm patterns for FAANG — how to identify and prove correctness"
      }
    ]
  },
  {
    title: "Phase 4 — Hard & mocks",
    subtitle: "Weeks 12–14",
    weeks: "2–3 mock interviews / week",
    goal: "Goal: interview-ready under pressure",
    strategy: "Timed mocks with real pressure. 45-minute sessions. Narrate everything. Review every problem you couldn't solve within 20 minutes — add it to a \"weak list\" and revisit daily.",
    color: "#BA7517",
    topics: [
      {
        title: "Hard DP — state machines & optimisation",
        freq: "fh",
        patterns: ["stock prices with cooldown/fee", "painting with k colors", "burst balloons", "stone game"],
        problems: "Best Time to Buy/Sell Stock III · IV · with Cooldown · Strange Printer · Burst Balloons",
        ask: "Walk me through hard DP problems with state machines — stock series and multi-dimensional DP"
      },
      {
        title: "Advanced graphs — Dijkstra & Bellman-Ford",
        freq: "fm",
        patterns: ["shortest path weighted", "negative cycles", "k-stops constraint", "network delay"],
        problems: "Network Delay Time · Cheapest Flights K Stops · Path with Min Effort · Find City with Smallest Neighbours · Swim in Rising Water",
        ask: "Explain Dijkstra vs Bellman-Ford — when to use each in FAANG interview problems"
      },
      {
        title: "Segment trees & Fenwick trees",
        freq: "fl",
        patterns: ["range query", "point update", "range sum", "coordinate compression"],
        problems: "Range Sum Query Mutable · Count of Smaller Numbers After Self · Queue Reconstruction by Height · My Calendar I/III",
        ask: "Explain segment trees and Fenwick trees — when are they tested at FAANG and how to implement?"
      },
      {
        title: "String algorithms",
        freq: "fm",
        patterns: ["KMP pattern matching", "rolling hash / Rabin-Karp", "palindrome expansion", "z-algorithm"],
        problems: "Implement strStr() · Longest Palindromic Substring · Repeated DNA Sequences · Shortest Palindrome · Find All Anagrams",
        ask: "Explain KMP and rolling hash — string matching algorithms for FAANG senior interviews"
      },
      {
        title: "Design data structures",
        freq: "fh",
        patterns: ["LRU cache", "LFU cache", "median stream", "time-based key-value", "snapshot array"],
        problems: "LRU Cache · LFU Cache · Design Twitter · Design Snake Game · Time Based Key-Value Store",
        ask: "Walk me through how to design LRU and LFU caches from scratch for FAANG coding rounds"
      },
      {
        title: "Mock interview simulation",
        freq: "fh",
        patterns: ["timed 45-min sessions", "blind problem selection", "think-aloud narration", "post-mortem review"],
        problems: "Blind 75 · NeetCode 150 · Company-tagged Leetcode (Google / Meta / Amazon tags) · Pramp peer mocks",
        ask: "Give me a 45-minute mock interview problem with a follow-up, like a real FAANG coding round"
      },
      {
        title: "Weak list review",
        freq: "fh",
        patterns: ["re-solve every missed problem", "pattern re-categorise", "time to solve < 15 min target"],
        problems: "Your personal list of every problem you couldn't solve or took > 30 min — resolve each twice more before the interview",
        ask: "Help me build a system to track and review my DSA weak spots before a FAANG interview"
      }
    ]
  }
];
