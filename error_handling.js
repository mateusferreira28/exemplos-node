/**
 * Tratamento de erro
 */

function throwError() {
    try {
        throw new Error('deu ruim')
    } catch (error) {
        console.log(error.message)
    }
}

class CustomError extends Error {}

function throwCustomError() {
    try {
        throw new CustomError('deu ruim só que diferente')
    } catch (error) {
        if (error instanceof CustomError) {
            console.log(error.message)
        }
    }
}