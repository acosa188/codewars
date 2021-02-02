function shortestDistance(a, b, c) {
    // Your code here
    let pos1 = Math.sqrt(Math.pow((a+c),2) + Math.pow(b, 2));
    let pos2 = Math.sqrt(Math.pow((c+b),2) + Math.pow(a, 2));
    let pos3 = Math.sqrt(Math.pow((a+b),2) + Math.pow(c, 2));
    
    return Math.min(pos1,pos2,pos3);
  }