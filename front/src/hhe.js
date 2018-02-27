<div className="row">
				<div className="col-4">
					<button onClick = {this.handleSubmit.bind(this)}><img className="img" src ={bg3}/>B2 Upper-Intermidiate</button>
				</div>
				<div className="col-4">
					<button><img className="img" src ={bg2}/>C1 Advanced</button>
				</div>
				<div className="col-4">
					<button><img className="img" src ={bg2}/>C2 Proficiency</button>
				</div>
			</div>

			<div className="col-4">
					<button><img className="img" src ={bg2}/>A2 Elementary</button>
				</div>
				<div className="col-4">
					<button><img className="img" src ={bg2}/>B1 Intermidiate</button>
				</div>


				<div style = {editStyle}> 
            <input type="image" className="rounded float-center" 
            src={this.state.changedImg} alt="contact image" 
            height="100" width="100" />    
            <input type="text" onChange={this.handleEditingChangeName.bind(this)}
                value={this.state.changedName}/>
            <input type="text" onChange={this.handleEditingChangePhone.bind(this)}
                value={this.state.changedPhone} />
            <button onClick={this.handleEditingDone.bind(this)}> Save</button>
        </div>

        <input type="image" className="rounded float-center" src={this.state.changedImg}  alt="contact image" height="100" width="100" />
            <label>
                <div>
                    {this.state.changedName}
                </div>
                <div>
                  {this.state.changedPhone}
                </div>
            </label>
            <button onClick={this.handleEditing.bind(this)} 
                className ="btn btn-danger">Edit</button>
            <button onClick = {this.handleSubmit.bind(this)}  
                className ="btn btn-danger">Info</button>