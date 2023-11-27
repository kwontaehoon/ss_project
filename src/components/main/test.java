import java.util.Scanner;

class Account {

}

public class test {
    public static void main(String[] args){
        
        System.out.println("1.계좌생성 | 2.계좌목록 | 3.예금 | 4.출금 5.종료");

        Scanner scanner = new Scanner(System.in);
        int input = scanner.nextInt();

        Account account = new Account();

        int [] Application = new int[100]; 
        String number; // 계좌번호
        String name; // 계좌주
        int price = 0; // 초기입금액

        while(true){

            if(input == 1){
                System.out.println("-----------");
                System.out.println("계좌생성");
                System.out.println("-----------");

                
                
            }else if(input == 2){
                System.out.println("-----------");
                System.out.println("계좌목록");
                System.out.println("-----------");
            }else if(input == 3){
                System.out.println("-----------");
                System.out.println("계좌생성");
                System.out.println("-----------");
                
            }else if(input == 4){
                System.out.println("-----------");
                System.out.println("출금");
                System.out.println("-----------");
                
            }else if(input == 5){
                System.out.println("프로그램 종료");
                break;
            }
        }


        
    }
}