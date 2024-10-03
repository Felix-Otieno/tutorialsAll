class Shoes {
  String addidas;
  String nike;
  Shoes(this.addidas, this.nike);

  void letSay() {
    print("There are many types of shoes around the world.");
  }
}

void main() {
  Shoes obj = Shoes("Air Max", "Addidas Gazelle");
  obj.letSay();
  print(obj.addidas);
  print(obj.nike);
}
