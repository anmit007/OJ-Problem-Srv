function addProblem(req,res){
    return res.status(501).json({
        message: "Not implemented"
    })
}

function getProblem(req,res){

    return res.status(501).json({
        message: "Not implemented"
    })
  
}
function getProblems(req,res){

    return res.status(501).json({
        message: "Not implemented"
    })
  
}

function deleteProblem(req,res){
    return res.status(501).json({
        message: "Not implemented"
    })
}

function upadateProblem(req,res){

    return res.status(501).json({
        message: "Not implemented"
    })
}

function ping(req,res) {
    return res.json({message:"problem controller alive"})

}
module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    upadateProblem,
    ping
}
