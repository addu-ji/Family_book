var images = ["bhaiduj.jpg",, "bua,mom.jpg" , "mom,dad.jpg", "", "Diwali1.jpg","diwali2.jpg","family_photo.jpg","dadu's_birthday.jpg"];
var names = ["Faaily Book","Vidisha Mathpal", "himaksh mathpal", "neha mathpal", "niyati ", "vibhor mathpal", "vipul mathpal","mohanchandra mathpal","deepa mathpal","hemlata mathpal","vaibhav mathpal","dimple mathpal","monish mathpal","ravi mathpal","hema mathpal","bhagwati mathpal","nareshchandra mathpal","pankaj mathpal","","himanshu Mathpal","himani mathpal","kavya mathpal"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
