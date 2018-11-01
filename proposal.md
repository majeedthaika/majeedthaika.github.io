## 15-618: Parallel Computer Architecture and Programming
### Majeed Thaika, Anshu Aviral

### THOMAS: Tuning Highly-efficient Offline MLP on Android SoCs

### URL: http://www.andrew.cmu.edu/user/aanshu/ 

### Summary

We will build a machine learning framework for efficient offline fine-tuning of pre-trained deep neural networks on Android SoCs. Our work will allow users to customize models based on custom data stored on their own mobile device.

### Background

In recent years, the compute power of mobile devices have increased tremendously. A Nvidia mobile processor called Tegra K1, which has been incorporated into Nexus 9 and Google Tango, contains 192 GPU cores and conforms to the CUDA specification. We are planning to experiment on Samsung Galaxy S8, which has an Octa-core Kryo CPU and Adreno 540. The GPU has an on-chip memory of 1024 KB, clocks 710 MHz, performs 567 GFLOPS and supports OpenCL API version 2.0.

Owing to the increasing GPU capabilities, there have been successful attempts at parallelizing an inference pass on trained NNs on iOS and Android devices. Specifically, the Espresso project (15418 final project, Spring 2016) built an efficient inference framework for iOS devices. More recent NN architectures, such as SqueezeNet and MobileNet, have been optimized for mobile device inferences. Our project will extend their results by allowing offline training of deep networks in the memory-constrained device - this involves efficiently computing and storing multiple batch results of forward passes and subsequent weight backpropagation. Prior attempts at training neural networks on mobile devices either involved an online cloud-based training, or were limited to shallow networks if trained solely on mobile device.

By porting neural networks, tasks such as image classification, next word prediction and activity detection can possibly be done in real time on such devices. However, these models are not tailored to the experiences of individual users. Fine tuning these models on user data can improve user experience, save cost of training model on the server and aid privacy.  

### Challenges

Training a model on mobile phones still remains a challenging task due to the following constraints:

1. Memory Footprint: High memory capacity is required, both for storing the parameter values and for storing the activation values, during the forward pass. When training the network, the gradient for each parameter needs to be stored and updated during the backward pass.

2. Processing Speed: The processing speed of the Samsung Galaxy S8 still remains in MHz while a typical laptop can clock up to 2 GHz, which means that performing computations on mobile phones is around 4x slower. Given that training a neural network is compute intensive, the code should efficiently utilize the GPUs, so as to minimize the energy consumption and run time.

### Resources

We will test our code mainly on the Samsung Galaxy S8, leveraging its Adreno 540 GPU to parallelize NN computations. We will use the [DeepCL](https://github.com/hughperkins/DeepCL) codebase, an OpenCL library to train deep CNNs, as a starting point to write our Android-specific library (in addition, we will use the [TransferCL](https://github.com/OValery16/TransferCL) codebase as another guide - this framework already modifies DeepCL to run on Android devices but isn't optimized to run deeper networks). We aim to use pretrained [AlexNet](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf) and [MobileNet](https://arxiv.org/abs/1704.04861) architectures as baseline when comparing our fine-tune training performances.

### Goals and Deliverables

1. For our 60% goal, we will deploy Alexnet and Mobilenet for image detection on Android device and efficiently infer on test images.

2. For our 80% goal, we will implement the constructs for fine tuning the final few layers of the network with data from the user. This analysis will include comparing the training-time and accuracies of our implementation against the serial version of the code which runs on a single core of the CPU.

3. For our 100% goal, we will efficiently retrain all the layers of network, initialized with the pre-trained weights and with data obtained from the user. 

4. For our 120% goal, we will train the whole network from scratch and analyze the performance metrics with the fine tuned network and the network trained on desktops.

### Platform Choice

Our choice of the Android device is limited by the phone that's available to us. Also if we choose iOS, we will need to learn Swift and Metal frameworks from scratch and that will take away from valuable development time. Our choice of the framework is inspired by the fact that most Android GPU SoCs support OpenCL library functions.

### Schedule

Time | Plan |
--- | --- | 
Nov 5 | Familiarize ourselves with DeepCL and start modifying the code to work with Android devices 
Nov 12 | Finish deploying the serial code and start parallelizing inference for different kinds of layers. 
Nov 19 | Finish parallelizing inference on different kinds of layers of the neural network (80% goal) 
Nov 26 | Start working on the serial implementation of the fine tuning construct for the last layer of the network 
Dec 3 | Write code that utilizes the GPU for parallelizing the fine tuning of the last layer of the network (100%) 
Dec 10 | Extend the implementation to perform retraining of the whole network 
Dec 15 | Analyze and compare the performance metrics for each stage of the implementation 