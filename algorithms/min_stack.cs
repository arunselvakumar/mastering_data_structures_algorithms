public class MinStack {
  private readonly stack;
  private List<int> sortedItems;

  /** initialize your data structure here. */
  public MinStack () {
    this.stack = new Stack<int>();
    this.sortedItems = new List<int>();
  }

  public void Push (int x) {
    this.stack.Push(x);
    this.sortedItems.Add(x);
    this.sortedItems = this.sortedItems.Sort();
  }

  public void Pop () {
    this.stack.Pop();
    this.sortedItems.Remove(x);
    this.sortedItems = this.sortedItems.Sort();
  }

  public int Top () {
    return this.stack.Peek();
  }

  public int GetMin () {
    return this.sortedItems[0];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(x);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */