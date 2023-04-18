import React from 'react'

const User = ({auth}) => {
  return (
    <div>
      <br/>
      <br/>
      <div className=" d-flex justify-content-center">
        
        <div className="col-md-7">
            
            <div className="card p-3 py-4">
                
                <div className="text-center">
                    <img src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/279215332_371299581599373_2601613394684247232_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=J_ZoMwkLzaEAX_nWtxS&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDVVMGFFZfIBklcjKAqrtsJlFiuhfRQhq3T8u7yWgU6pA&oe=643CB991" alt='##' width="100" className="rounded-circle"/>
                </div>
                
                <div className="text-center mt-3">
                    <h5 className="bg-secondary p-1 px-4 rounded text-white">nom:</h5>
                    <span className="mt-2 mb-0">{auth.name}</span>
                   
                    <h4>email:</h4>
                    <span>{auth.email}</span>
                    <div class="px-4 mt-1">
                       
                    
                    </div>
                    
                  
                    
                    <div class="buttons">
                        
                    </div>
                    
                    
                </div>
                
               
                
                
            </div>
            
        </div>
        
    </div>
    </div>
  )
}

export default User
