// Import the 'sync-input' library to read input from the user
let input = require('sync-input');

// Define two strings representing two different habitats
let camel =`
Switching on the camera in the camel habitat...
 ___.-''''-.
/___  @    |
',,,,.     |         _.'''''''._
     '     |        /           \\
     |     \\    _.-'             \\
     |      '.-'                  '-.
     |                               ',
     |                                '',
      ',,-,                           ':;
           ',,| ;,,                 ,' ;;
              ! ; !'',,,',',,,,'!  ;   ;:
             : ;  ! !       ! ! ;  ;   :;
             ; ;   ! !      ! !  ; ;   ;,
            ; ;    ! !     ! !   ; ;     
            ; ;    ! !    ! !     ; ;
           ;,,      !,!   !,!     ;,;
           /_I      L_I   L_I     /_I
Look at that! Our little camel is sunbathing!`;

let lion = `
Switching on the camera in the lion habitat...
                                               ,w.
                                             ,YWMMw  ,M  ,
                        _.---.._   __..---._.'MMMMMw,wMWmW,
                   _.-""        '''           YP"WMMMMMMMMMb,
                .-' __.'                   .'     MMMMW^WMMMM;
    _,        .'.-'"; \`,       /\`     .--""      :MMM[==MWMW^;
 ,mM^"     ,-'.'   /   ;      ;      /   ,       MMMMb_wMW"  @\\
,MM:.    .'.-'   .'     ;     \`\\    ;     \`,     MMMMMMMW \`"=./\`-,
WMMm__,-'.'     /      _.\\      F'''-+,,   ;_,_.dMMMMMMMM[,_ / \`=_}
"^MP__.-'    ,-' _.--""   \`-,   ;       \\  ; ;MMMMMMMMMMW^\`\`; __|
           /   .'            ; ;         )  )\`{  \\ \`"^W^\`,   \\  :
          /  .'             /  (       .'  /     Ww._     \`.  \`"
         /  Y,              \`,  \`-,=,_{   ;      MMMP\`""-,  \`-._.-,
        (--, )                \`,_ / \`) \\/"")      ^"      \`-, -;"\\:
The lion is roaring!`;

let deer = `
Switching on the camera in the deer habitat...
   /|       |\\
\`__\\\\       //__'
   ||      ||
 \\__\`\\     |'__/
   \`_\\\\   //_'
   _.,:---;,._
   \\_:     :_/
     |@. .@|
     |     |
     ,\\.-./ \\
     ;;\`-'   \`---__________-----.-.
     ;;;                         \\_\\
     ';;;                         |
      ;    |                      ;
       \\   \\     \\        |      /
        \\_, \\    /        \\     |\\
          |';|  |,,,,,,,,/ \\    \\ \\_
          |  |  |           \\   /   |
          \\  \\  |           |  / \\  |
           | || |           | |   | |
           | || |           | |   | |
           | || |           | |   | |
           |_||_|           |_|   |_|
          /_//_/           /_/   /_/
Our 'Bambi' looks hungry. Let's go to feed it!`;

let goose = `
Switching on the camera in the goose habitat...

                                    _
                                ,-"" "".
                              ,'  ____  \`.
                            ,'  ,'    \`.  \`._
   (\`.         _..--.._   ,'  ,'        \\    \\
  (\`-.\\    .-""        ""'   /          (  d _b
 (\`._  \`-"" ,._             (            \`-(   \\
 <_  \`     (  <\`<            \\              \`-._\\
  <\`-       (__< <           :
   (__        (_<_<          ;
    \`------------------------------------------
The goose is staring intently at you... Maybe it's time to change the channel?`;

let bat = `
Switching on the camera in the bat habitat...
_________________               _________________
 ~-.              \\  |\\___/|  /              .-~
     ~-.           \\ / o o \\ /           .-~
        >           \\\\  W  //           <
       /             /~---~\\             \\
      /_            |       |            _\\
         ~-.        |       |        .-~
            ;        \\     /        i
           /___      /\\   /\\      ___\\
                ~-. /  \\_/  \\ .-~
                   V         V
This bat looks like it’s doing fine.`;

let rabbit = `
Switching on the camera in the rabbit habitat...
         ,
        /|      __
       / |   ,-~ /
      Y :|  //  /
      | jj /( .^
      >-"~"-v"
     /       Y
    jo  o    |
   ( ~T~     j
    >._-' _./
   /   "~"  |
  Y     _,  |
 /| ;-"~ _  l
/ l/ ,-"~    \\
\\//\\/      .- \\
 Y        /    Y
 l       I     !
 ]\\      _\\    /"\\
(" ~----( ~   Y.  )
It looks like we will soon have more rabbits!`;


// Store the habitats in an array
let habitats = [camel, lion, deer, goose, bat, rabbit];

// Use a while loop to repeat the behavior until the user enters "exit"
while (true) {
  // Ask the user for the habitat they want to see and store their response
  let answer = input("Which habitat # do you need? (enter 'exit' to quit) ");

  // If the user enters "exit", end the loop and print "See you later!"
  if (answer === "exit") {
    console.log("See you later!");
    break;
  }

  // Otherwise, convert their answer to a number and subtract 1 to get the index of the habitat in the array
  let index = Number(answer) - 1;

  // If the index is valid (i.e. between 0 and the length of the habitats array), print the habitat and a message indicating the end of the program
  if (
