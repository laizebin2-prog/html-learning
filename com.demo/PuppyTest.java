public class PuppyTest {
  public static void main(String[] args){
    Puppy empOne=new Puppy("Puppy1");
    Puppy empTwo=new Puppy("Puppy2");
  
    empOne.setAge(26);
    empTwo.setAge(25);
    
    System.out.println(empOne.getName() + ":" + empOne.getAge());
    System.out.println(empTwo.getName() + ":" + empTwo.getAge());

  }
}
