export default function(studentArray){
    if (!Array.isArray(studentArray)){
        return[];
    }
    return studentArray.map((student) => student.id)
}