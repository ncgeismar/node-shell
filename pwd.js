
module.exports.pwd = function(data){
    const cmd = data.toString().trim()
        process.stdout.write(__dirname);
    process.stdout.write('\nprompt> ')
}
