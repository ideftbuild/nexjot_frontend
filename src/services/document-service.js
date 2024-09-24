
export const getDocument = async (id) => {
    try {
        const response = await fetch('http://localhost:8080/api/documents/' + id,
            {'credentials': 'include'});
        if (response.ok) {
            return await response.json();
        } else {
            return null;
        }
    } catch {
        console.log(`Error retrieving document: ${err}`);
    }
}

export const getDocumentsPreview = async (useStaticData=false) => {
    if (useStaticData) {
        return documentService();
    }
    try {
        const response =  await fetch('http://localhost:8080/api/documents',
            {'credentials': 'include'});
        if (response.ok) {
            return await response.json()
        }
    } catch {
        console.log(`Error retrieving documents: ${err}`)
    }
}

/**
 * This function tries to mimic the behaviour of `getDocuments` by returning static documents
 * Note: Use this for testing purposes
 * @returns A list of document
 */
export const documentService = () => {
    return ([{
        'id': '1',
        'title': 'Documents 1 testing with a long text for line wrapping adding more hurray',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis lectus fringilla dignissim pretium. Sed nec ex eu nisi rutrum vehicula. Pellentesque fermentum libero facilisis viverra auctor. Fusce commodo, massa ut iaculis tincidunt, magna arcu posuere sapien, in finibus mi augue eget mauris. Donec id bibendum sapien. Curabitur dictum gravida ipsum, vitae sagittis neque viverra sit amet. Ut feugiat, augue eget gravida egestas, tellus orci vestibulum erat, vitae sagittis mi lacus eu dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris blandit mauris a consectetur convallis. Proin vestibulum tristique libero euismod tincidunt. Etiam felis nisl, porttitor sit amet faucibus vel, aliquam id nisl. Duis lacinia, ipsum ut pulvinar consectetur, sapien lacus dignissim purus, in cursus orci libero et sem. Donec eget fermentum velit. Cras eu risus at nisl accumsan volutpat vitae ac odio.\n' +
            '\n' +
            'Suspendisse nec pellentesque arcu, lobortis tempor lorem. Sed orci libero, dignissim et neque id, faucibus venenatis sapien. Suspendisse rhoncus sem ut ex sodales, in tempor lorem consectetur. Phasellus a elementum lacus, eget elementum purus. Maecenas eget urna sit amet nisi pellentesque luctus. Aliquam maximus viverra tellus, eget vehicula ligula vulputate quis. Vestibulum elementum risus et massa faucibus tincidunt.\n' +
            '\n' +
            'Phasellus id auctor ex. Fusce quis ullamcorper quam, nec tempus mauris. Curabitur feugiat, neque at vehicula ullamcorper, enim turpis accumsan erat, eget dictum tellus nulla facilisis dolor. Maecenas purus lacus, gravida ut mi a, lobortis auctor sem. Phasellus semper tristique nibh vel elementum. In pulvinar nulla sed ullamcorper tristique. In hac habitasse platea dictumst. In eu leo nec quam aliquam semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vestibulum varius nunc, ut faucibus nibh ultrices vel. Praesent in arcu felis. Ut ligula lorem, fringilla imperdiet est ac, sodales lobortis odio. Nam blandit sodales neque vel mollis. Pellentesque accumsan, mi a hendrerit rutrum, sem lacus malesuada odio, vitae posuere nunc neque vel nunc. Aenean aliquet mi ac tempus condimentum.\n' +
            '\n' +
            'Mauris leo nisi, facilisis ac sodales et, ornare ut dolor. Vestibulum id ornare elit, et pulvinar quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus mollis ante a tortor ultrices interdum. Integer a elementum justo. Aliquam pharetra dignissim mattis. Vestibulum ac interdum arcu. Morbi facilisis eleifend laoreet. Sed commodo condimentum vestibulum. Quisque tincidunt nunc ac risus tristique, at faucibus arcu commodo.\n' +
            '\n' +
            'Ut ullamcorper leo enim, nec tristique sem bibendum sed. Duis sollicitudin dui nec nisl pulvinar fringilla. Proin dui lacus, facilisis ultrices tincidunt ac, tristique in justo. Praesent blandit quam vel est auctor dignissim. Nunc lacinia, augue ut venenatis convallis, neque diam volutpat nisl, nec hendrerit nisi justo at ipsum. Mauris molestie volutpat purus, non lacinia massa. Donec molestie sit amet lorem vitae aliquam. Nam sit amet urna sed massa eleifend gravida. Fusce eget faucibus turpis. Donec quis condimentum felis, eu tristique metus. Nulla vel augue enim.'
    },
    //     {
    //     'id': '2',
    //     'title': 'Documents 2',
    //     'content': 'This is the content of document 2'
    // },
    //     {
    //     'id': '3',
    //     'title': 'Documents 3',
    //     'content': 'This is the content of document 3'
    // }, {
    //     'id': '4',
    //     'title': 'Documents 4',
    //     'content': 'This is the content of document 4'
    // },
        //{
    //     'id': '5',
    //     'title': 'Documents 5',
    //     'content': 'This is the content of document 5'
    // }, {
    //     'id': '6',
    //     'title': 'Documents 6',
    //     'content': 'This is the content of document 6'
    // }, {
    //     'id': '7',
    //     'title': 'Documents 7',
    //     'content': 'This is the content of document 7'
    // }, {
    //     'id': '8',
    //     'title': 'Documents 8',
    //     'content': 'This is the content of document 8'
    // }, {
    //     'id': '9',
    //     'title': 'Documents 9',
    //     'content': 'This is the content of document 9'
    // }, {
    //     'id': '10',
    //     'title': 'Documents 10',
    //     'content': 'This is the content of document 10'
    // }, {
    //     'id': '11',
    //     'title': 'Documents 11',
    //     'content': 'This is the content of document 11'
    // }, {
    //     'id': '12',
    //     'title': 'Documents 12',
    //     'content': 'This is the content of document 12'
    // }, {
    //     'id': '13',
    //     'title': 'Documents 13',
    //     'content': 'This is the content of document 13'
    // }, {
    //     'id': '14',
    //     'title': 'Documents 14',
    //     'content': 'This is the content of document 14'
    // }, {
    //     'id': '15',
    //     'title': 'Documents 15',
    //     'content': 'This is the content of document 15'
    // }, {
    //     'id': '16',
    //     'title': 'Documents 16',
    //     'content': 'This is the content of document 16'
    // }, {
    //     'id': '17',
    //     'title': 'Documents 17',
    //     'content': 'This is the content of document 17'
    // }, {
    //     'id': '18',
    //     'title': 'Documents 18',
    //     'content': 'This is the content of document 18'
    // }, {
    //     'id': '19',
    //     'title': 'Documents 19',
    //     'content': 'This is the content of document 19'
    // },
    //     {
    //     'id': '20',
    //     'title': 'Documents 20',
    //     'content': 'This is the content of document 20'
    // }
    ]);
}
