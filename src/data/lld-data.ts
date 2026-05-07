export interface SOLIDPrinciple {
  letter: string;
  title: string;
  subtitle: string;
  body: string;
  patterns: string;
}

export interface LLDPattern {
  category: string;
  title: string;
  description: string[];
  tags: string[];
  ask: string;
}

export interface LLDProblem {
  frequency: "High" | "Medium";
  title: string;
  body: string;
  tags: string[];
  ask: string;
}

export interface LLDStep {
  num: number;
  title: string;
  body: string;
}

export const solidPrinciples: SOLIDPrinciple[] = [
  {
    letter: "S",
    title: "Single responsibility",
    subtitle: "One reason to change",
    body: "Each class owns one concept. A UserService that handles auth, sends emails, and formats UI strings has three reasons to change — split it.",
    patterns: "I'd extract email sending into a NotificationService so a change in email provider doesn't touch auth logic."
  },
  {
    letter: "O",
    title: "Open/closed",
    subtitle: "Open to extension, closed to modification",
    body: "Add new behaviour via new classes, not by editing existing ones. A payment processor with a switch on payment type violates OCP — add StripePayment without touching PaymentProcessor.",
    patterns: "Strategy, Decorator, Template Method all enforce OCP."
  },
  {
    letter: "L",
    title: "Liskov substitution",
    subtitle: "Subtypes must be substitutable",
    body: "If Square extends Rectangle and setWidth also changes height, the caller's invariant breaks — LSP violation. Classic interview trap: inheritance when composition is needed.",
    patterns: "Can you replace a parent with any child without breaking the caller?"
  },
  {
    letter: "I",
    title: "Interface segregation",
    subtitle: "Don't force unused dependencies",
    body: "A fat IWorker with work(), eat(), sleep() forces robots to implement eat(). Split into IWorkable, IFeedable.",
    patterns: "Spotting when an interface forces a class to implement methods it throws UnsupportedOperationException on."
  },
  {
    letter: "D",
    title: "Dependency inversion",
    subtitle: "Depend on abstractions",
    body: "High-level modules shouldn't depend on low-level ones — both depend on interfaces. OrderService depends on IPaymentGateway, not on StripeClient directly. Enables mocking in tests.",
    patterns: "Factory, DI containers, Strategy all implement DI."
  }
];

export const designPatterns: LLDPattern[] = [
  {
    category: "Creational",
    title: "Singleton, Factory, Abstract Factory, Builder, Prototype",
    description: [
      "Singleton — one instance globally. Thread-safe implementation uses double-checked locking or an enum. Tested in: Logger, Config, Connection Pool.",
      "Factory / Abstract Factory — decouple object creation from usage. Tested in: parsers, DB adapters, notification systems.",
      "Builder — construct complex objects step by step. Avoids telescoping constructors. Required when objects have many optional fields."
    ],
    tags: ["thread-safe singleton", "factory method", "telescoping constructor", "immutable builder"],
    ask: "Show me how to implement a thread-safe Singleton and Builder pattern in Java or Python with FAANG-level detail"
  },
  {
    category: "Structural",
    title: "Adapter, Decorator, Facade, Proxy, Composite",
    description: [
      "Decorator — add behaviour without subclassing. Implements OCP perfectly. Tested in: coffee shop with condiments, BufferedReader.",
      "Adapter — translate one interface to another. Tested in: third-party integrations, SDK wrappers.",
      "Proxy — control access. Virtual proxy (lazy load), protection proxy (auth check). Tested in: caching layer, heavy objects.",
      "Facade — simple interface over a complex subsystem. Reduces coupling."
    ],
    tags: ["wrapping", "open/closed", "lazy loading", "interface translation"],
    ask: "Show me Decorator vs Proxy vs Adapter — when to use each with code examples for FAANG LLD interviews"
  },
  {
    category: "Behavioural",
    title: "Observer, Strategy, Command, Iterator, Template Method, State",
    description: [
      "Observer — one-to-many event propagation. Tested in: notification systems, stock tickers, MVC updates.",
      "Strategy — encapsulate interchangeable algorithms. Tested in: payment processors, compression, routing.",
      "Command — encapsulate a request as an object. Enables undo/redo, queueing. Tested in: text editors, macros.",
      "State — object changes behaviour when internal state changes. Replaces complex switch/if-else chains."
    ],
    tags: ["event-driven", "interchangeable algorithms", "undo/redo", "state machine"],
    ask: "Show me Observer and Strategy patterns implemented from scratch — FAANG LLD coding examples"
  }
];

export const lldProblems: LLDProblem[] = [
  {
    frequency: "High",
    title: "LRU Cache",
    body: "Core data structures: HashMap<Key, Node> + doubly-linked list. O(1) get and put. Follow-ups: make it thread-safe (read-write lock + lock striping), distributed LRU (consistent hashing across nodes), LFU variant.",
    tags: ["doubly-linked list", "hashmap", "O(1) ops", "thread safety", "eviction policy"],
    ask: "Walk me through designing and coding LRU Cache from scratch for a FAANG LLD interview — including thread safety follow-ups"
  },
  {
    frequency: "High",
    title: "Parking lot",
    body: "Entities: ParkingLot, Floor, Spot, Vehicle, Ticket, PaymentStrategy. Tests: inheritance hierarchy, Strategy for pricing, Singleton for the lot, Observer for spot availability.",
    tags: ["inheritance hierarchy", "Strategy pattern", "Singleton", "enum types"],
    ask: "Design a parking lot system for a FAANG LLD interview — class diagram, patterns used, and core method implementations"
  },
  {
    frequency: "High",
    title: "Elevator system",
    body: "Entities: ElevatorController, Elevator, Request, Direction. State machine: IDLE → MOVING_UP → MOVING_DOWN → STOPPED. Dispatch algorithm: SCAN (look algorithm) or FCFS.",
    tags: ["state machine", "SCAN algorithm", "Observer", "priority queue"],
    ask: "Design an elevator system for a FAANG LLD interview — state machine, dispatch algorithm, and class structure"
  },
  {
    frequency: "High",
    title: "Snake and ladder / Board game",
    body: "Entities: Game, Board, Cell, Player, Dice, Snake, Ladder. Key design question: should Snake and Ladder share a parent? Yes — both are Jump objects with a start and end.",
    tags: ["extensibility", "polymorphism", "game loop", "composition"],
    ask: "Design a Snake and Ladder game for a FAANG LLD interview — class structure, extensibility, and patterns"
  },
  {
    frequency: "High",
    title: "Logger / rate limiter",
    body: "Logger: Singleton + Chain of Responsibility. Rate limiter: Strategy for algorithms (token bucket, leaky bucket). Thread-safe counter with atomic operations.",
    tags: ["Singleton", "Chain of Responsibility", "Strategy", "token bucket", "thread safety"],
    ask: "Design a flexible Logger system and a thread-safe rate limiter for a FAANG LLD interview"
  },
  {
    frequency: "High",
    title: "Vending machine",
    body: "Classic State pattern problem. States: IDLE → HAS_MONEY → ITEM_SELECTED → DISPENSING → CHANGE_RETURN. Each state handles events differently.",
    tags: ["State pattern", "state transitions", "inventory", "error handling"],
    ask: "Design a vending machine using the State pattern for a FAANG LLD interview — all states, transitions, and code"
  }
];

export const interviewFramework: LLDStep[] = [
  {
    num: 1,
    title: "Clarify (3 min)",
    body: "Scope before designing. Ask: what actors use this? Core use cases? Scale? Single-process or distributed? Nail the scope or you'll design the wrong thing."
  },
  {
    num: 2,
    title: "Use cases (3 min)",
    body: "List the behaviours, not the classes. Classes emerge from use cases. Interviewers penalise jumping to code before understanding what it needs to do."
  },
  {
    num: 3,
    title: "Core entities (5 min)",
    body: "Noun extraction + relationships. Draw associations: one-to-many, has-a, is-a. Explicitly state composition vs inheritance decisions."
  },
  {
    num: 4,
    title: "Identify patterns (3 min)",
    body: "Name the patterns before coding. Strategy for pricing, Singleton for manager, Observer for notifications. Shows you design with intent."
  },
  {
    num: 5,
    title: "Code the core (20 min)",
    body: "Interfaces first, then key methods. Define interfaces before concrete classes. Leave helpers as stubs. Narrate your decisions."
  }
];
